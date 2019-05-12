workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# Deploy, and write deployment to file
action "deploy" {
  uses = "actions/zeit-now@master"
  args = "--public --no-clipboard deploy ./site > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
}

# Always create an alias using the SHA
action "alias" {
  needs = "deploy"
  uses = "actions/zeit-now@master"
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = ["ZEIT_TOKEN"]
}

# Filter for master branch
action "master-branch-filter" {
  needs = "alias"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# Requires now.json in repository
action "release" {
  needs = "master-branch-filter"
  uses = "actions/zeit-now@master"
  secrets = [
    "ZEIT_TOKEN",
    "GAPI_CLIENT_EMAIL",
    "GAPI_PRIVATE_KEY",
  ]
  args = "alias --local-config=./site/now.json -e GAPI_CLIENT_EMAIL -e GAPI_PRIVATE_KEY"
}

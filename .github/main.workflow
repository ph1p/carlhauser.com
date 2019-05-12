workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

# Deploy, and write deployment to file

# Always create an alias using the SHA

# Filter for master branch
action "master-branch-filter" {
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
  args = "--no-clipboard --local-config=./site/now.json -e GAPI_CLIENT_EMAIL -e GAPI_PRIVATE_KEY"
}

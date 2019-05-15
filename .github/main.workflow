workflow "Deploy on Now" {
  on = "push"
  resolves = ["release"]
}

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
    "GAPI_PRIVATE_KEY",
    "GAPI_CLIENT_EMAIL",
  ]
  args = " --target production -A ./now.json -e GAPI_PRIVATE_KEY -e GAPI_CLIENT_EMAIL"
  env = {
    NODE_ENV = "production"
  }
}

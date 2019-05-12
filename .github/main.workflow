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
    "GAPI_PRIVATE_KEY",
    "GAPI_CLIENT_EMAIL",
  ]
  args = "-e GAPI_PRIVATE_KEY -e GAPI_CLIENT_EMAIL"

  # Deploy, and write deployment to file

  # Always create an alias using the SHA
}

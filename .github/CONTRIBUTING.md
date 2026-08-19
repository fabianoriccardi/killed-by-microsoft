# Killed by Microsoft

<div align="center">
  <img src="../src/assets/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Microsoft</h1>
  <p>A tribute and log of beloved products and services killed by Microsoft.</p>
</div>

## Contributing Guide

### Pull Request

If you are contributing any code outside of `graveyard.json`, please ensure that your Pull Request will pass continuous integration. Run `yarn test` before opening your pull request which will check the React/Jest tests as well as verify that `graveyard.json` is formatted correctly _and_ well-formed. These tests are extremely important to quickly merging pull requests for this project.

#### Continuous Integration (CI)

Killed by Microsoft uses [GitHub Actions](https://github.com/features/actions) for continuous integration testing. Every pull request and push must pass all checks before it can be merged into the `master` branch.

### Dependency Upgrades

Killed by Microsoft uses [Dependabot](https://dependabot.com/) for keeping dependencies up to date. Generally, a maintainer will wrap any upgrades issued by Dependabot in the `upgrades` branch, merge, and automatically close any Dependabot PRs. Any dependency upgrades must also pass CI and CD checks.

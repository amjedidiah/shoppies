# Lerna Notes

## Getting Started

- `mkdir lerna-repo && cd $_`
- `npx lerna init --independent`

## Commands

1. Create: Create a new lerna-managed package
   `lerna create <name> [loc]`

2. List: list local packages
   `lerna ls -a --graph --json -l`

3. Add: Add a dependency to existing matched lerna packages
   `lerna add <package>` OR `lerna add <package> --scope=<package_to_add_to>`

4. Changed: list packages that would be the subjects of the next `lerna version` or `lerna publish` execution
   `lerna changed -a --graph --json -l`

5. Run: run an npm script in each package that contains that script
   `lerna run <script> -- [..args]`

6. Exec: execute a command in each package
   `lerna exec -- <command> [..args]`

7. Bootstrap: installs packages dependencies and links any cross-dependencies
   `lerna bootstrap --hoist --ignore-prepublish`

8. Version: as good as commiting to GitHub
   `lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease] --amend --conventional-commits --yes`

   - Functions

     - Identifies updated packages since last release
     - Prompts for a new version (if none is explicitly defined)
     - Modifies package metadata to reflect new release
     - Commits changes and tags the commit
     - Pushes to the git remote

9. Publish: as good as commiting to GitHub and deploying
   `lerna publish [major | minor | patch | premajor | preminor | prepatch | prerelease] --amend --conventional-commits --no-git-reset --yes`

   - Functions

     - Publish packages updated since the last release (calling lerna version behind the scenes)
     - Publish packages tagged in the current commit (from-git).
     - Publish packages in the latest commit where the version is not present in the registry (from-package).
     - Publish an unversioned "canary" release of packages (and their dependents) updated in the previous commit

10. Import: Import a package into the monorepo with commit history
    `lerna import <path-to-external-repository> --dest=<import location in lerna repo>`

11. Clean: Remove the node_modules directory from all packages
    `lerna clean --yes`

12. Init: Start new lerna repo | Upgrade to latest version of lerna
    `lerna init --independent`

## More Notes

- Move common devDependencies to root packgage with `lerna link convert`

- Lerna Wizard: Go to for help `lerna-wizard`

- Any packages that is `"private": false` won't be published by lerna

## Git Hosted Packages

`
// packages/pkg-1/package.json
{
name: "pkg-1",
version: "1.0.0",
dependencies: {
"pkg-2": "github:example-user/pkg-2#v1.0.0"
}
}

// packages/pkg-2/package.json
{
name: "pkg-2",
version: "1.0.0"
}
`

```
# web-dev-bootcamp

A repository for the Udemy Web Development Bootcamp course.

## Scripts

- `pretty:check`: checks if all files in the directory are formatted correctly with prettier
- `pretty:write`: formats all files in the directory with prettier
- `lint`: lints all files in the directory with eslint
- `lint:fix`: fixes all fixable lint errors in files in the directory with eslint
- `beast-mode`: runs `pretty:check` and `lint` scripts consecutively
- `prepare`: installs husky git hooks

## Dependencies

- `eslint`: Javascript linter
- `eslint-config-airbnb-base`: Airbnb's eslint ruleset
- `eslint-config-prettier`: disables any conflicting eslint rules with prettier
- `eslint-plugin-import`: eslint plugin to lint import/export syntax
- `eslint-plugin-prettier`: allows prettier formatting to be integrated with eslint
- `husky`: git hook manager
- `prettier`: code formatter


## License

ISC
```

(Note: I assumed that the empty `description` field is intentional and not meant to be filled out.)

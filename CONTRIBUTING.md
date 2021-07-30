## Contributing Guidelines

As a team member working on this project, we care about clean and efficient management of our codebase. Please follow these important guidelines while contributing code to this repo.

### Submitting a Pull Request

Good pull requests, whether patches, improvements or new features are a fantastic help and keep our project happy, healthy and wise. They should remain focused in scope and avoid containing unrelated commits.

Here is a summary of the steps to follow:

1. All working branches must be created from the `develop` branch and all pull requests must be made into this branch. Refer the [branch naming guidelines](#naming-branches).

```bash
$ git checkout -b <working-branch-name>
```

2. Make sure to pull all latest changes regularly to keep your working branch in sync and updated.

```bash
$ git pull origin develop
```

3. Follow the [commit message guidelines](#commit-messages) while making your commits.
4. [Open a Pull Request](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) with a clear title and description. The title should give an overview of the feature, change or fix while the description must give elaborated details of the same.
5. Make sure to mark atleast 3 team members as a reviewer on your pull request.
6. For ambitious tasks, open a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/) as soon as possible in order to get continuous feedback and help from the team. Mark it 'Ready For Review' once you've completed all code changes.

### Naming Branches

1. Use [kebab-case](https://en.wiktionary.org/wiki/kebab_case) while naming your branches. All words must be in lowercase and separated by hyphens. For example, `profile-page` or `navbar-component`.
2. Always make sure that another team member is not working on a similarly named branch before you create a working branch.

### Commit Messages

#### 1. Clear & Concise Commits

-   Each commit should correspond to a specific functional change.
-   Ideally a commit should not create an inconsistent state (such as test errors, linting errors, partial fix, etc.)
-   A complex feature should be broken down into multiple commits as long as each one keeps a consistent state and consists of a self-contained change.
-   Avoid using `git add .` while committing changes, rather add only the relevant files or folders to your commit.
-   Maintain a practice of committing regularly as you cross milestones of your task.
-   Make sure you do not add any build files, node modules or secure config files to your commit.

#### 2. Commit message format

A good commit message starts with one of the following verbs:

-   **Add** feature x
-   **Remove** feature y
-   **Update** feature z
-   **Refactor** function x
-   **Fix** crazy bug
-   **Revert** previous change

Or any other verb that clearly indicates the type of change being made.

Always use the verbs in **Imperative Present** tense. Don’t use Past or Present Continuous tenses for commits.

-   Add feature xyz :heavy_check_mark:
-   Added feature xyz :x:
-   Adds feature xyz :x:
-   Adding feature xyz :x:

#### 3. Commit Author

Make sure your name and email ID are configured correctly in your git config so that your commits are authored correctly.

To check if the user name and email is set correctly

```bash
$ git config user.name
$ git config user.email
```

To set a user name or email

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "yourname@email.com"
```

#### 4. Tagging Issues

If your commit is related to an existing issue listed on the repo, you can [tag it using the issue number](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword). If your commit completely fixes or resolves an existing issue listed on the repo, you can auto-close it with a reference. For example, `Fix #100`. You can also use the keywords "Close" or "Resolve".

You may also [link issues manually](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue) once you've opened a pull request.
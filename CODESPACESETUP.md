# Setting Up a GitHub Codespace

1. Create a codespace on GitHub. (They are also refered to as `containers`)
------
## If `.devcontainer/devcontainer.json` doesn't exist

1. Make a `.devcontainer` folder and create a `devcontainer.json` file inside it.

2. Copy and paste the following JSON into the `devcontainer.json` file:

    ```json
    {
        "features": {
            "ghcr.io/devcontainers-extra/features/node-asdf:0": {}
        },
        "postCreateCommand": "npm install"
    }
    ```

3. Press `Ctrl + Shift + P`, type **Rebuild** to rebuild your container, and select **Full Rebuild**.
------
2. Run `npm install` if the container hasn't already executed the command.

3. Use `npm start` to application.

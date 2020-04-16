# js4kids
Repository to store all my solutions and notes for the book [JavaScript for Kids](https://www.nostarch.com/javascriptforkids) by [Nick Morgan](https://github.com/skilldrick). 

![](./prints/book_cover.png)

<br>

## Table of Contents:

- [Folder's content](##Folder-s-content)
- [Requirements](##Requirements)
    - [Installing NodeJS on Ubuntu](###Installing-NodeJS-on-Ubuntu)
    - [Bonus: a bit more on NVM](###Bonus--a-bit-more-on-NVM)    

<br>

## Folder's content:
Each folder contains the solutions to the challenges of that chapter. I'm more used to Back-End development, so I wrote `.js` scripts and ran all of them in terminal with the following command: 

```shell
node *path/to/script.js*   # just change the path to the one in your computer
```
> **p.s.:** to run scripts that way, your machine needs to attend all requirements detailed in _Requirements_ subsection.

That's probably not the best way to do this (lol), so feel free to call them in a `.html` file (as shown below) and see them in action in your favourite browser, or just copy and paste its code directly into your browser's console (just press the `F12` key to open it :).  

```html
<!DOCTYPE html>
<html>
    <script src="path/to/script.js"> </script>
</html>
```

## Requirements:
To run the scripts on terminal (as I did), you'll need to have [NodeJS](https://nodejs.org/en/) installed in your machine. As I'm writing this README, I'm using Ubuntu 20.04 as operational system on my machine and present the steps I followed to install [NodeJS](https://nodejs.org/en/) and its dependencies. You may want to follow one of these tutorials if you're using a different OS:

> [Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows) - [Mac OS](https://treehouse.github.io/installation-guides/mac/node-mac.html)

<br>

### Installing NodeJS on Ubuntu

Okay, if you're a Ubuntu user for a while (or any other Debian-based linux distro), you may think that installing `NodeJS` and its package manager [NPM](https://www.npmjs.com/) is as easy as this:

```shell
sudo apt install nodejs npm
```

I did this and, surprisingly, it didn't work *'Out of the Box'*. The problem was that the `NPM` and `NodeJS`versions available on the official PPAs didn't get along very well. 

So, after reading lots of tutorials and testing many different forms of installing these two things, I find out that the best solution was to install them via [NVM](https://github.com/nvm-sh/nvm), which stands for *Node Version Manager* (it's useful to have `NVM` installed in your machine for plenty other reasons).

To get to the nitty-gritty, installing [NVM](https://github.com/nvm-sh/nvm) can be done by just running one the following commands in your terminal: 

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
or 
```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

<br>

**p.s.1:** if you don't have `curl`or `wget` in your system yet, just run

```shell
sudo apt install *package_name*   # just change *package_name* to your desired choice (curl or wget)
```

<br>

If all went well, the output of `nvm --version` should look like the following:

![](./prints/nvm_version.png)

<br>

Now that NVM was successfully installed, we can install NodeJS and NPM by simply executing:

```shell
nvm install node   # this will install the latest version of NodeJS
```

Personally, I recommend installing the LTS (*Long Term Support*) version by running

```shell
nvm install node --lts   # Currently, the LTS version corresponds to 12.16.1
```

And voilà. `NodeJS` and `NPM` were successfully installed with this simple command. If you want to check, the output of `node --version` and `npm --version` both should look like the following:

![](./prints/node_and_npm_version.png)

<br>

Finally, you're all set. To run a `.js` file in terminal, just use 

```shell
node *path/to/script.js*   # just change the path to the one in your computer
```

<br>

-----
### BONUS: a bit more on NVM

The `Node Version Manager` proves to be really useful specially if you're working on different projects and need to use different versions of `Node`. To **alternate between different versions**, just do 

```shell
nvm use node --version   # just change --version to the one you want to use, e.g., 10.10.0
```

For example, to use the latest version of `NodeJS`, it would be as simple as 

```shell
nvm use node --latest
```

To install a specific node version, just run
```shell
nvm install node --version  # just change --version to the one you want to use, e.g., 8.9.1
```

To list all installed versions in your system:
```shell
nvm ls
```

Finally, to list all available versions on the remote repository:
```shell
nvm ls-remote
```

This way, you can choose your desired version and install it in case you don't have it yet on your machine. :)

On the official [NVM GitHub Repo](https://github.com/nvm-sh/nvm) there are lots of other useful commands and usage examples.

------
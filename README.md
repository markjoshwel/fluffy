# fluffy

a tracker website for fluffy, a silly dog

check it out at [fluffy.joshwel.co](https://fluffy.joshwel.co)

## Developing

### Setup

1. **Environment Setup**

    You will need the following:

    - Content Generation  
        _These are installable via [devbox](https://github.com/jetpack-io/devbox), which uses [Nix](https://nixos.org/)._
        - [Python >=3.10](https://www.python.org/)
        - [Poetry](https://python-poetry.org/)

    - Website Building  
        - [Bun >=0.5.9](https://bun.sh/)

    You may get them through whatever means necessary, or use devbox for a hermetic, reproducible environment.

    ```shell
    # get devbox (optional/recommended)
    curl -fsSL https://get.jetpack.io/devbox | bash
    ```

2. Project Setup

    > **Info**
    >
    > devbox users can skip these as they are done in `init_hook`, and can just run `devbox shell`.

    - For Content Generation

        ```
        poetry shell
        poetry install
        ```

    - For Website Building

        ```
        bun install
        ```

    You're all set!

## Licences

Please read the relevant sections on their respective applicable licences.

- The Unlicence (Unlicense)  
    [SPDX Listing](https://spdx.org/licenses/Unlicense.html) | [Licence](/UNLICENCE)

- Creative Commons Zero v1.0 Universal Licence (CC0-1.0)  
    [SPDX Listing](https://spdx.org/licenses/CC0-1.0.html) | [Licence](/LICENCE.CC0) | [Legalcode](/LEGALCODE.CC0)

- SIL Open Font Licence 1.1 (OFL-1.1)  
    [SPDX Listing](https://spdx.org/licenses/OFL-1.0.html) | [Licence: See Respective Fonts](#fonts)

### Website and Code

The source code of the website and content generation scripts are located in `src/*`, and is free and unencumbered software released into the public domain. For more information, please refer to the [UNLICENCE](/UNLICENCE) file or <http://unlicense.org>.

### Media

Recent photographs are pledged to the public domain under the Creative Commons Zero v1.0 Universal Licence.

Historical photographs of unknown origin are rights reserved by their respective copyright owners.

Refer to the [Licence Index](/public/assets/licenceindex) on what files are licenced under what licence.

### Fonts

- Fragment Mono (OFL-1.1) - `/public/assets/thirdparty/FragmentMono*`  
    [Repository](https://github.com/weiweihuanghuang/fragment-mono) | [Licence](/public/assets/thirdparty/FragmentMono-LICENCE.txt)

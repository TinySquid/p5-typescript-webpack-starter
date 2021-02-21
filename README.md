# p5-typescript-webpack-starter

I built this to use as a starter for getting p5js and typescript + webpack working together with everything preconfigured to work out of the box. The webpack config and tsconfig are minimal so you can tweak them to your own needs. I've also included the relevant docs links in those files for reference if you are new to setting up tsconfig/webpack and want to see the other available options.

# Instructions

1. Clone repository
2. Install dependencies with your package manager of choice (`yarn install` or `npm install`)
3. (Optional) - If you want to use in your own repo, delete the `.git` dir and initialize a new one with `git init` and then add the origin to an empty repo with `git remote add origin <your-repo-link>`

# Scripts

There are two scripts, `start` and `build`.

(Assuming yarn as package manager)

- `yarn start` will run a development instance in the browser that reloads when you make changes.
- `yarn build` will build the project. Output will be in the `/dist` directory. This is what you would host on platforms like [netlify](https://www.netlify.com/) or [vercel](https://vercel.com/).

# Structure

- /src - Your code
- /src/assets - Static things like images, sprites, etc
- /src/types - For declaring modules and types for typescript

# License

I'm not a fan of licenses so do what you want with this code.


# React Js: HackerNew Clone

## Installation 
Install my-project with yarn. The following command will create node_modules and yarn.lock file.

```bash 
  yarn
```

The following command will start the dev server.
```bash
  yarn start
```
    
## Running Tests
To run test cases, run the following command. Implemented basic test with Jest.

```bash
  yarn test
```

## Implementation
- On page load 500 new stories are fetched, only 10 are show on the page.
- Clicking on `load more button` loads 10 more stories.
- Clicking on `past button` should load stories form the past. But I couldn't figure out any way to get the stories according to date, nor it is documented in the repo for API.
- SO, I loaded the best stories `on clicking the past button`. As best stories are often from the past.

# Thank You!
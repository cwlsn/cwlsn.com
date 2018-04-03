# cwlsn.com Source Code

[![Build Status](https://travis-ci.org/cwlsn/cwlsn.com.svg?branch=master)](https://travis-ci.org/cwlsn/cwlsn.com) [![Coverage Status](https://img.shields.io/codecov/c/github/cwlsn/cwlsn.com/master.svg?style=flat-square)](https://codecov.io/gh/cwlsn/cwlsn.com/branch/master)

Feel free to clone this repo to get a quick start on a personal site. Tech used here:

- [Parcel Bundler](https://parceljs.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com)
- [Jest](https://facebook.github.io/jest/)

That's it! Every thing is pretty simple. I don't need anything fancy right now, but will update this over time and track things via GitHub issues. I might add some fun stuff in my spare time, let me know if you pick anything up while browsing code. :shipit: `me [at] this repos name` is my email.

## Development 

With Parcel's zero-config thing, it's easy. Clone in to whatever folder you'd like, and then:

```console
npm i
npm run dev
```

## Production

This is what suits me right now, different configurations should be simple to set up. I run this site on a small VPS on Dreamhost running Node/Apache. Make sure you have up to date Node and npm running on your server, clone your repo to the appropriate folder and simply run:

```console
npm run site
```

This will kick out any local changes (`package-lock.json` can get pesky), get the latest master, build the project, run tests and if all has gone well you will see your updates online!

## Tests

I've set up some basic snapshot testing and "it doesn't crash" tests. To update snapshots:

```console
npm run test -- -u
```

## Configuration

In `src/config/styles.js` you will find some options. They currently control the fonts, background spectrum colours and animation duration.

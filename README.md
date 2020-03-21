<p align="center">
  <img alt="Lisan.js" src="https://raw.githubusercontent.com/lisanjs/lisan/master/website/static/img/logo/banners/5_big.png" width="480">
  <br>
  <strong>i18n</strong>, Reimagined!
</p>

<p align="center">
  A blazing fast and super small i18n library for Javascript
</p>

<hr>

<p align="center">
<a href="https://lisanjs.com"><strong>Website</strong></a><br><br>
<a href="https://lisanjs.com/docs/what-is-lisan#installation">Installation</a> ·
<a href="https://lisanjs.com/docs/docs/full-api-reference">API</a> ·
<a href="https://lisanjs.com/docs/docs/pluralization">Guides & Tips</a>
</p>

<hr>

# Lisan Benchmark test

[Lisan](https://lisanjs.com) is **super fast** because it doesn't interpolate strings
by finding and replacing placeholders in the translation templates.
Instead, it relies on template literals which are pure string
concatenation functions.

In average usage, Lisan is least 25x times faster than using regex replaces.
However, Lisan is at least 50x times faster when compared to the other i18n
libraries and taking their complexities into account.

## Benchmark.js

### With interpolation

<a href="https://lisanjs.com/img/with-interpolation.png" target="_blank"><img src="https://lisanjs.com/img/with-interpolation.png"></a>

<p align="center" style="font-size: 10px">
on MacBook Pro 2017, 2,8 GHz Quad-Core Intel Core i7 16 GB 2133 MHz LPDDR3
<p>

> As you can predict, Lisan gets **exponentially** faster if
> number of placeholders and localization functions increase.

### When there is no interpolation

Lisan is faster even on entries not containing placeholders.
Because it does not perform placeholder search.

<a href="https://lisanjs.com/img/no-interpolation.png" target="_blank"><img src="https://lisanjs.com/img/no-interpolation.png"></a>

<p align="center" style="font-size: 10px">
on MacBook Pro 2017, 2,8 GHz Quad-Core Intel Core i7 16 GB 2133 MHz LPDDR3
<p>

## Setup

Clone the repository, and run the commands below:

```bash
npm install
npm start
```

After starting the server, you can visit:

- http://localhost:8080/tests/with-interpolation.html
- http://localhost:8080/tests/no-interpolation.html

Please check the **developer console** for the results!

## License

This repository is [MIT licensed](./LICENCE).

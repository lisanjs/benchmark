(function(module) {
  module.exports = {
    locale: "en-US",
    entries: {
      complex: ({
        val1,
        val2,
        val3,
        val4,
        val5,
        val6,
        val7,
        val8,
        val9,
        val10
      }) =>
        `${val1} Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amedLorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amedLorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed ${val2} ${val3} ${val4} ${val5} ${val6} ${val7} Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amedLorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amedLorem ipsum dolor sit amed. Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed Lorem ipsum dolor sit amed ${val8} ${val9} ${val10}`,
      "key.date.time": ({ day, time, another }) =>
        `Today is ${day} and time is ${time}, ${another}`,
      "key.with.a.name.placeholder": ({ name }) => `Hello ${name}`,
      "key.with.no.placeholder": "I am a static message"
    }
  };
})(typeof module !== "undefined" ? module : window.lisanLoaderListener);

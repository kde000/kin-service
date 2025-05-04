module.exports = function(eleventyConfig) {
  // Показывать все ошибки
  eleventyConfig.setQuietMode(false);
  
  // Копируем папки со стилями и изображениями
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
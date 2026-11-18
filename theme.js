try {
  const savedTheme = localStorage.getItem("gtheme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch (error) {}

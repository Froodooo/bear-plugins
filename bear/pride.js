// Add event listener to all elements with class "pride-strip"
document.querySelectorAll('.pride-strip').forEach(function(element) {
  element.style.cursor = 'pointer';
  element.addEventListener('click', function() {
      location.href = '/two-ways-to-add-pride-month-flair-to-your-website/';
  });
});
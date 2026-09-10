/* RemoteReps hero mosaic: the plus button flips a group card to its module list. */
(function () {
  var tiles = document.querySelectorAll('.rr-tile');
  Array.prototype.forEach.call(tiles, function (tile) {
    var btn = tile.querySelector('.rr-flip');
    var front = tile.querySelector('.rr-front');
    var back = tile.querySelector('.rr-back');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var on = !tile.classList.contains('is-flipped');
      tile.classList.toggle('is-flipped', on);
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
      btn.setAttribute('aria-label', (on ? 'Hide ' : 'Show ') + btn.getAttribute('aria-label').replace(/^(Show|Hide) /, ''));
      front.setAttribute('aria-hidden', on ? 'true' : 'false');
      back.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    Array.prototype.forEach.call(document.querySelectorAll('.rr-tile.is-flipped .rr-flip'), function (b) { b.click(); });
  });
})();

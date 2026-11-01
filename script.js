/**
 * City Sounds — genre filter for music recommendations.
 * No dependencies. Renders cards and wires up accessible filter buttons.
 */

(function () {
  'use strict';

  var recommendations = [
    { title: 'Motion Sickness', artist: 'Phoebe Bridgers', genre: 'indie', genreLabel: 'Indie', spotifyUrl: 'https://open.spotify.com/track/5xo8RrjJ9CVNrtRg2S3B1R' },
    { title: 'Kyoto', artist: 'Phoebe Bridgers', genre: 'indie', genreLabel: 'Indie', spotifyUrl: 'https://open.spotify.com/track/4vjvx7Zxkb4AltGcZ0BBvI' },
    { title: 'Scott Street', artist: 'Phoebe Bridgers', genre: 'indie', genreLabel: 'Indie', spotifyUrl: 'https://open.spotify.com/track/6Uwi2Qk3H7fM4b4W4ExrAp' },
    { title: 'Doll Parts', artist: 'Hole', genre: 'grunge', genreLabel: 'Grunge', spotifyUrl: 'https://open.spotify.com/track/49t1GWE6ZiEoBgN92oMDdM' },
    { title: 'Violet', artist: 'Hole', genre: 'grunge', genreLabel: 'Grunge', spotifyUrl: 'https://open.spotify.com/track/6CHENx8iqzMwavTIz8s0gm' },
    { title: 'Celebrity Skin', artist: 'Hole', genre: 'grunge', genreLabel: 'Grunge', spotifyUrl: 'https://open.spotify.com/track/2V4Bc2I962j7acQj1N0PiQ' },
    { title: 'Space Song', artist: 'Beach House', genre: 'dream-pop', genreLabel: 'Dream Pop', spotifyUrl: 'https://open.spotify.com/track/7H0ya83CMmgFcOhw0UB6ow' },
    { title: 'Myth', artist: 'Beach House', genre: 'dream-pop', genreLabel: 'Dream Pop', spotifyUrl: 'https://open.spotify.com/track/2NfxtzCIrpCmJX5Z2KMdD5' },
    { title: 'When the Sun Hits', artist: 'Slowdive', genre: 'dream-pop', genreLabel: 'Dream Pop', spotifyUrl: 'https://open.spotify.com/track/7aXUzHn4A6fGKofVPGCoeT' },
  ];

  var listEl = document.getElementById('recs-list');
  var emptyEl = document.getElementById('recs-empty');
  var filterBtns = document.querySelectorAll('.filter-btn');

  function genreLabel(genre) {
    for (var i = 0; i < recommendations.length; i++) {
      if (recommendations[i].genre === genre) {
        return recommendations[i].genreLabel;
      }
    }
    return genre;
  }

  function createCard(item) {
    var card = document.createElement('article');
    card.className = 'rec-card';

    var link = document.createElement('a');
    link.className = 'spotify-link rec-link';
    link.href = item.spotifyUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Listen to ' + item.title + ' by ' + item.artist + ' on Spotify (opens in a new tab)');

    var title = document.createElement('h3');
    title.textContent = item.title;

    var artist = document.createElement('p');
    artist.textContent = item.artist;

    var tag = document.createElement('span');
    tag.className = 'rec-genre';
    tag.textContent = item.genreLabel;

    link.appendChild(title);
    link.appendChild(artist);
    link.appendChild(tag);
    card.appendChild(link);

    return card;
  }

  function render(genre) {
    listEl.innerHTML = '';

    var filtered = genre === 'all'
      ? recommendations
      : recommendations.filter(function (r) { return r.genre === genre; });

    if (filtered.length === 0) {
      emptyEl.hidden = false;
      return;
    }

    emptyEl.hidden = true;
    filtered.forEach(function (item) {
      listEl.appendChild(createCard(item));
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      var genre = btn.getAttribute('data-genre');
      render(genre);
    });
  });

  // --- Album cover art generator (grungy, generated locally via canvas) ---

  function makeCanvas(size) {
    var c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    return c;
  }

  function addNoise(ctx, size, alpha) {
    var imageData = ctx.getImageData(0, 0, size, size);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var noise = (Math.random() - 0.5) * 255 * alpha;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function drawPunisher(ctx, size) {
    // Muted sage-green fog with a lone figure silhouette
    var grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#7a9e7e');
    grad.addColorStop(1, '#3d5240');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = 'rgba(20, 25, 20, 0.85)';
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.72, size * 0.08, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.52, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    addNoise(ctx, size, 0.12);
  }

  function drawLiveThroughThroughThis(ctx, size) {
    // Blood-red grunge with a jagged tear
    var grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#8a3a3a');
    grad.addColorStop(0.5, '#5c1f1f');
    grad.addColorStop(1, '#2e0e0e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = 'rgba(200, 160, 120, 0.6)';
    ctx.lineWidth = size * 0.015;
    ctx.beginPath();
    ctx.moveTo(size * 0.3, size * 0.2);
    ctx.lineTo(size * 0.7, size * 0.5);
    ctx.lineTo(size * 0.4, size * 0.8);
    ctx.stroke();

    addNoise(ctx, size, 0.2);
  }

  function drawUltraviolence(ctx, size) {
    // Hazy purple dusk with soft vertical streaks
    var grad = ctx.createLinearGradient(0, 0, 0, size);
    grad.addColorStop(0, '#6e4a8a');
    grad.addColorStop(0.5, '#4a2e5e');
    grad.addColorStop(1, '#1e1028');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    ctx.globalAlpha = 0.15;
    for (var i = 0; i < 6; i++) {
      ctx.fillStyle = '#b89ec8';
      ctx.fillRect(size * (0.1 + i * 0.14), 0, size * 0.03, size);
    }
    ctx.globalAlpha = 1;

    addNoise(ctx, size, 0.1);
  }

  function setCover(id, drawFn) {
    var img = document.getElementById(id);
    if (!img) return;
    // Keep external album artwork; generate a placeholder only without a source.
    if (img.getAttribute('src')) return;
    var size = 300;
    var canvas = makeCanvas(size);
    var ctx = canvas.getContext('2d');
    drawFn(ctx, size);
    img.src = canvas.toDataURL('image/png');
  }

  setCover('cover-indie', drawPunisher);
  setCover('cover-grunge', drawLiveThroughThroughThis);
  setCover('cover-dreampop', drawUltraviolence);

  // Initial render
  render('all');
})();

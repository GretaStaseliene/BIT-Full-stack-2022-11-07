export function addFooterLinks() {
    let html = `<ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>`;

  return document.getElementById('links').innerHTML = html;
}

export function addCopyrights() {
    let cprghts = `© Greta Stašelienė 2023 copyrights`;

    return document.getElementById('copyright').innerHTML = cprghts;
}
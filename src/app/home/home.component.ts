import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "A FRONTEND SNIPPET GENERATOR";
  buttonCreateSnippet = 'Create your own snippet';
  copySnippet = 'Copy Snippet Markup';
  deleteSnippet = 'Delete Snippet';
  deleteAllSnippets = 'Delete All Snippets';

  constructor() { }

  ngOnInit() { }

  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  manageStorage(operation, item) {
    if (operation === 'clear') {
      let decision = confirm("Do you want to delete all snippets?");
      if (decision == true) {
        let txt = "Snippets has been deleted!";
        localStorage.clear();
      } else {
        return;
      }
    } else if (operation === 'delete') {
      let decision = confirm("Do you want to delete this snippet?");
      if (decision == true) {
        let txt = "Snippet has been deleted!";
        localStorage.removeItem('item' + item);
      } else {
        return;
      }
    } else if (operation === 'copy') {
      item = localStorage.getItem('item' + item);
      this.copyToClipboard(item);
      alert('Copied');
    } else return;
  }

  listStoredSnippets(item) {
    return localStorage.getItem(item)
  }

}

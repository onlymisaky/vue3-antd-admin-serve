// todo

import * as sqlite3 from 'sqlite3';

export class Sqlite {
  db: sqlite3.Database;

  async connet(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database('', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async save() {
    this.db.run('', (error, r) => {

    });
  }
}

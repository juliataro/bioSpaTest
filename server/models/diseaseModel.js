const db = require("../config/db");

// Symptom DB table class and and SQL methods

class Disease {
  constructor(dis_id, dis_title_et, dis_title_ru, dis_title_en) {
    this.dis_id = dis_id;
    this.dis_title_et = dis_title_et;
    this.dis_title_ru = dis_title_ru;
    this.dis_title_en = dis_title_en;
  }

  /**
   *  REQUESTS FOR ADMIN PANEL
   */
  // async saveNewDisease() {
  //   let sql = `INSERT INTO diseases(dis_title_et,dis_title_ru,dis_title_en)
  //   VALUES('${this.dis_title_et}','${this.dis_title_ru}','${this.dis_title_en}')`;

  //   const [newDisease, _] = await db.execute(sql);
  //   return newDisease;
  // }

  // static findAll() {
  //   let sql = "SELECT * FROM diseases;";
  //   return db.execute(sql);
  // }

  // static findById(dis_id) {
  //   let sql = `SELECT * FROM diseases WHERE dis_id = ${dis_id};`;
  //   return db.execute(sql);
  // }

  // static findByIdAndUpdate(dis_id) {
  //   let sql = `UPDATE diseases SET dis_title_et = ${this.dis_title_et}, dis_title_ru = ${this.dis_title_ru}, dis_title_en = ${this.dis_title_en} WHERE dis_id = ${dis_id} ;`;
  //   return db.execute(sql);
  // }

  // static deleteById(dis_id) {
  //   let sql = `DELETE FROM diseases WHERE dis_id = ${dis_id};`;
  //   return db.execute(sql);
  // }

  // DropDown fetching functions
  static findByTitleEt() {
    let sql = `SELECT dis_id, dis_title_et FROM diseases;`;
    return db.execute(sql);
  }
}

module.exports = Disease;

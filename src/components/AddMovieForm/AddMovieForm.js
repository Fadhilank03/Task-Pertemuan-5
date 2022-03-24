/**
 /* Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
      <div className="addmovie__right">
          <img
            className={styles.addmovie__image}
            src="https://picsum.photos/id//237/200/300"
            alt="placeholder"
          />
        </div>
        <div className={styles.addmovie__left}>
          <h2 className={styles.addmovie__title}>Add Movie</h2>
          <form action="/handlelogin">
            <label for="username">Title</label><br />
            <input type="text" id="username" name="username" value="" /><br />
            <label for="year">Year</label><br />
            <input type="text" id="password" name="password" value="" /><br /><br />
         <input type="submit" value="Submit" />
         </form>

        </div>
        
      </section>
    </div>
  );
}

export default  AddMovieForm;

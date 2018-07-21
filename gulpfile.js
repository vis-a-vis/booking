let gulp = require('gulp');

// Dev tasks
// -------------------------------------------------

gulp.task('travis', ['build', 'test'], () => {
  process.exit(0);
});

gulp.task('default', () => {
  // place code for your default task here
});

module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dist/mincssall.min.css': ['src/css/*.css']
    }
  }
}

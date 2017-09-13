// Pianosearch.js 0.1.0
// (c) 2017 Espen Gjendem
// This package is licensed under MIT.
// Feel free to modify it to your specific needs.
// Contact me if you have any questions related to the source code.
// espen.gjendem@gmail.com

module.exports = { 
    /**
    * Returns an object literal with match ratio in percent, and other information.
    * @param {string} search
    * @param {string} target
    */
    pianoSearch: function(search, target) {
        let matches = 0, targetIndexCount = 0, nonMatches = 0

        // Santize input strings.
        search = search.replace(/\s|\W/g, '').toLowerCase().split('')
        target = target.replace(/\s|\W/g, '').toLowerCase().split('')

        search.forEach((e) => {
            for (var currentIndex = targetIndexCount; currentIndex < target.length; currentIndex++) {
                if (e == target[currentIndex]) {
                    matches++
                    targetIndexCount = currentIndex + 1
                    break
                } else {
                    nonMatches++
                }
            }
        })

        return {
            matches,
            nonMatches,
            matchRatio: (nonMatches + matches) / (matches ? matches : 1)
        }
    }
}
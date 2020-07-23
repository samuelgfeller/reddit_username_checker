$(document).ready(function () {
    $('#output').append('<div class="table-responsive"><table class="table table-striped"></table></div>');
    // Tabellen header erstellen
    $('#output table').addClass('table').append('<thead><tr><th>Username</th><th>available</th></tr></thead>' +
        '<tbody id="tableContent">');

    $("#checkAllBtn").on("click", function () {
        if(confirm('you want your browser to die?')){
            let allWords = getWords(3);
            alert('got all words');
            $.each(allWords, function (key, value) {
                if(value.charAt(0) === 'a' || value.charAt(0) === 'b'){
                    makeRequest(value);
                }
                console.log();
            });
        }
    });

    $("#checkBtn").on("click", function () {
        let username = $('#userInput').val();
        makeRequest(username);
    });

    function makeRequest(username) {
        // Stundenplan infos abfragen mit als Parameter die ID der Klasse
        $.ajax({
            url: 'https://api.reddit.com/api/username_available.json?user='+ username,
            async: true,
        }).done(function (output) {
            // Körper der Tebelle erstellen und mit werten füllen
            $('<tr><td scope="col">' + username +
                '</td><td scope="col">' + output +
                '</td></tr>').appendTo($('#output table'));
            // Close tbody
            $('#tableContent').addClass('table').append('</tbody>');

            // Schlägt der AJAX-Rquest fehl?
        }).fail(function (jqXHR, textStatus, errorThrown) {
            // Display the error on the screen
            alert('Error: ' + jqXHR.responseText + ', ' + textStatus);
        }); // end getJSON
    }

    function getWords(length){
        let flatten = arr => arr.reduce((carry, item) => carry.concat(item), []);

        let getAllWords = wordLength => {
            if (typeof wordLength != 'number') throw Error('wordLength must be a number');
            if (wordLength < 0) throw Error('wordLength must be greater than or equal to zero');
            if (wordLength == 0) return [];

            let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            // let alphabet = 'abcdefghij'.split('');
            let lengthen = word => alphabet.map(letter => word + letter);
            let addLetters = words => flatten(words.map(lengthen));
            let _getAllWords = (letters, words = alphabet, current = 1) => {
                return letters == current ? words :
                    _getAllWords(letters, addLetters(words), current + 1)
            };

            return _getAllWords(wordLength)
        };
        return getAllWords(length)
    }
});



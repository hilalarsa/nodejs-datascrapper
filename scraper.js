const axios = require('axios');
const cheerio = require('cheerio');

let url = 'https://jadwalsholat.org/adzan/monthly.php?id=307';

// axios.get(url, function (err, res, body) {
//     if (err && res.statusCode !== 200) throw err;
//     console.log(body)
    // let $ = cheerio.load(body);
    // $('table.table_adzan tr[align=center]').each((i, value) => {
    //     $(value).find('td').each((j, data) => {
    //         if ($(value).attr('class') === 'table_highlight')
    //             return process.stdout.write($(data).text().red + '\t');
    //         return process.stdout.write($(data).text() + '\t');
    //     });
    //     process.stdout.write('\n');
    // });
// });

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
    let $ = cheerio.load(response.data);
    $('table.table_adzan tr[align=center]').each((i, value) => {
        $(value).find('td').each((j, data) => {
            if ($(value).attr('class') === 'table_highlight')
                return process.stdout.write($(data).text().red + '\t');
            return process.stdout.write($(data).text() + '\t');
        });
        process.stdout.write('\n');
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
var ctx = document.getElementById('house-chart');
var millenial_data = [5, 5, 9, 4, 10, 2, 2, 10, 2, 2, 6, 9, 3];
console.log(
    millenial_data.reduce(function(acc, val) { return acc + val; }, 0)
);
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Blacked Eyed Peas',
            'Lady Gaga',
            'Chris Brown',
            'Kelly Clarkson',
            'Britney Spears',
            'Far East Movement',
            'Macklemore & Ryan Lewis',
            'Pitbull',
            '50 Cent',
            'Lil Wayne',
            'Rihanna',
            'Usher',
            'Shakira',
            'Beyonce',
            'Others'
        ],
        datasets: [{
            label: '# of Votes',
            data: [
                5, /**Black Eyed Peas */
                5, /**Lady Gaga */
                9, /**Chris Brown*/
                4, /**Kelly Clarkson */
                10, /**Britney spears*/
                2, /**Far east movement*/
                2, /**Macklemore */
                10, /**Pitbull */
                2, /**50 Cent */
                2, /**Lil Wayne */
                6, /**Rihanna */
                9, /**Usher */
                3, /**Shakira */
                5, /**Beyonce */
                137 /**Other Artists  */


            ],
            backgroundColor: [
                'rgb(0, 98, 255)',
                'rgb(170, 0, 255)',
                'rgb(255, 0, 162)',
                'rgb(255, 0, 0)',
                'rgb(255, 149, 0)',
                'rgb(255, 234, 0)',
                'rgb(174, 255, 0)',
                'rgb(4, 255, 0)',
                'rgb(0, 255, 179)',
                'rgb(0, 225, 255)',
                'rgb(0, 77, 153)',
                'rgb(33, 0, 153)',
                'rgb(247, 3, 255)',
                'rgb(247, 3, 255)',
                'rgb(125,125,125)'

            ],
            borderWidth: 0,
            borderColor: 'none'
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});
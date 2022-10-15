const axios = require('axios')

exports.convertCurrency = (req, res, next) => {
  const Data = req.body
  console.log(Data)

  try {
    axios
      .get(
        'https://api.currencyapi.com/v3/latest?apikey=ozx5lZhWJttVZLJH1xN0TTBRYroseWTZLY0vhbgU'
      )
      .then(function (response) {
        // Logic
        // From  & To
        // From & To (actual  currency)
        // Calculation
        // send

        res.status(200).json({
          status: true,
          currency: response.data,
        })
      })
  } catch (error) {}

  // res.status(404).json({
  //   status: false,
  //   cloth: [],
  // })
}


const Data = require('../models/data');


// moment.format("YYYY-MM--dd");

exports.getAllData = async (req, res, next) => {
    try {
        const data = await Data.findAll();
        if (data[0].length === 0) {
            return res.status(200).json({
                success: true,
                message: "No data is found"
            })
        }
        return res.status(200).json({
            success: true,
            data: data[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Something Went wrong"
        })
    }
}


exports.postData = async (req, res, next) => {

    try {
        await Data.createTable();

        const { date, status } = req.body;

        let data = new Data(date, status);

        data = await Data.create(data);

        return res.status(200).json({
            success: true,
            message: "New data is created"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

exports.getDataByDates = async (req, res, next) => {

    try {
        const { startDate, endDate, status } = req.params;

        const data = await Data.groupByDates(startDate, endDate, status);

        if (data[0].length === 0) {
            return res.status(200).json({
                success: true,
                message: "No data is found"
            })
        }
        return res.status(200).json(data[0])
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Something Went wrong"
        })
    }
}
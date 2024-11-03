const Joi = require("joi");

const mediaSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    release_year: Joi.number().required(),
    score: Joi.number().min(0).max(10).required(),
    review: Joi.string(),
});

const database = require("../services/database");

exports.getAllMedia = async (req, res) => {
    try {
        const result = await database.pool.query("SELECT * FROM media");
        return res.status(200).json(result.rows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getMediaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await database.pool.query(
            "SELECT * FROM media WHERE id = $1",
            [id]
        );
        if (!result.rows.length) {
            return res.status(404).json({ error: "Media not found" });
        }
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.createMedia = async (req, res) => {
    const { error } = mediaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { title, genre, release_year, score, review } = req.body;
    try {
        const existingMedia = await database.pool.query(
            "SELECT * FROM media WHERE title = $1 AND release_year = $2",
            [title, release_year]
        );
        if (existingMedia.rows.length > 0) {
            return res.status(409).json({ error: "Media already exists" });
        }

        const result = await database.pool.query(
            "INSERT INTO media (title, genre, release_year, score, review) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, genre, release_year, score, review]
        );
        return res.status(201).json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateMediaById = async (req, res) => {
    const { id } = req.params;
    const { error } = mediaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { title, genre, release_year, score, review } = req.body;
    try {
        const existingMedia = await database.pool.query(
            "SELECT * FROM media WHERE id = $1",
            [id]
        );
        if (!existingMedia.rows.length) {
            return res.status(404).json({ error: "Media not found" });
        }

        const result = await database.pool.query(
            "UPDATE media SET title = $1, genre = $2, release_year = $3, score = $4, review = $5 WHERE id = $6 RETURNING *",
            [title, genre, release_year, score, review, id]
        );
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteMediaById = async (req, res) => {
    const { id } = req.params;
    try {
        const existingMedia = await database.pool.query(
            "SELECT * FROM media WHERE id = $1",
            [id]
        );
        if (!existingMedia.rows.length) {
            return res.status(404).json({ error: "Media not found" });
        }

        await database.pool.query("DELETE FROM media WHERE id = $1", [id]);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

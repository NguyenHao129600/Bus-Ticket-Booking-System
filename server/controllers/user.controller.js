import User from '../models/User';

export const getAll = async (req, res) => {
    try {

        const users = await User.getAll();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

export const getById = async (req, res) => {
    try {

        const user = await User.getById(req.params.id);

        res.json(user);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

export const create = async (req, res) => {
    try {

        await User.create(req.body);

        res.json({
            success: true,
            message: 'User created'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

export const update = async (req, res) => {
    try {

        await User.update(req.params.id, req.body);

        res.json({
            success: true,
            message: 'User updated'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

export const remove = async (req, res) => {
    try {

        await User.delete(req.params.id);

        res.json({
            success: true,
            message: 'User deleted'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};
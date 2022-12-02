const create = {
    item: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    }
};

const update = {
    item: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    }
};

module.exports = {
    update,
    create,
};
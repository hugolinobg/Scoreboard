import roundModels from "../models/roundModels.js";

function findAll() {
	console.log(`findAll ${roundModels.findAll}`);
}

function create() {
	console.log(`create ${roundModels.create}`);
}

function put() {
	console.log(`put ${roundModels.put}`);
}

function deleted() {
	console.log(`deleted ${roundModels.deleted}`);
}

export default { findAll, create, put, deleted };

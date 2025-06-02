import teamModels from "../models/teamModels.js";

function findAll() {
	console.log(`findAll ${teamModels.findAll}`);
}

function create() {
	console.log(`create ${teamModels.create}`);
}

function put() {
	console.log(`put ${teamModels.put}`);
}

function deleted() {
	console.log(`deleted ${teamModels.deleted}`);
}

export default { findAll, create, put, deleted };

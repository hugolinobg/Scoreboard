import roundServices from "../services/roundServices.js";

function findAll() {
	console.log(`findAll ${roundServices.findAll}`);
}

function create() {
	console.log(`create ${roundServices.create}`);
}

function put() {
	console.log(`put ${roundServices.put}`);
}

function deleted() {
	console.log(`deleted ${roundServices.deleted}`);
}

export default { findAll, create, put, deleted };

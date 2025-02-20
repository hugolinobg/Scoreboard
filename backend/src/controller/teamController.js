import teamServices from "../services/teamServices.js";

function findAll() {
	console.log(`findAll ${teamServices.findAll}`);
}

function create() {
	console.log(`create ${teamServices.create}`);
}

function put() {
	console.log(`put ${teamServices.put}`);
}

function deleted() {
	console.log(`deleted ${teamServices.deleted}`);
}

export default { findAll, create, put, deleted };

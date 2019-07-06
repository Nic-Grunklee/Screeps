const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
var creepsControl = require('creepsControl');

const CREEP_ROLE = {
    harvester: 'harvester',
    upgrader: 'upgrader',
    builder: 'builder'
};

module.exports.loop = function () {

    for(var name in Game.spawns) {
        if(Game.spawns[name].energy > 250) {
            creepsControl.checkCreepsCount(name);
        }
    }

    for(var name in Game.creeps) {
        let creep = Game.creeps[name];
        let memory = Memory.creeps[name];
        switch(memory.memory.role) {
            case CREEP_ROLE.harvester: roleHarvester.run(creep); break;
            case CREEP_ROLE.upgrader: roleUpgrader.run(creep); break;
            case CREEP_ROLE.builder: roleBuilder.run(creep); break;
        }
    }

    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
}
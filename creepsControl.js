const CREEP_ROLE = {
    harvester: 'harvester',
    upgrader: 'upgrader',
    builder: 'builder'
};

const creepControl = {

    checkCreepsCount: function(name) {
        const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.harvester);
        const builders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.builder);
        const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.upgrader);

        if (harvesters.length < 3) {
            creepControl.createCreep(CREEP_ROLE.harvester, name);
        } else if (upgraders.length < 3) {
            creepControl.createCreep(CREEP_ROLE.upgrader, name);
        } else if (builders.length < 3) {
            creepControl.createCreep(CREEP_ROLE.builder, name);
        } else if (harvesters.length < 5) {
            creepControl.createCreep(CREEP_ROLE.harvester, name);
        } else if (upgraders.length < 4) {
            creepControl.createCreep(CREEP_ROLE.upgrader, name);
        }
    },

    createCreep: function (type, name) {
        Game.spawns[name].createCreep([WORK,CARRY,MOVE, MOVE], undefined,
            {memory: {role: type}});
    }

};

module.exports = creepControl;
db = db.getSiblingDB('nodedb')
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [ { role: 'readWrite', db: 'nodedb',},],
});
db.products.drop();
db.products.insert({
    "brand": "Linux",
    "serviceTag": "focal-fossa"
})
db.products.insert({
    "brand": "docker",
    "serviceTag": "docker-ce"
})
db.products.insert({
    "brand": "kubernetes",
    "serviceTag": "K8S"
})
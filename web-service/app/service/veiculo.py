from flask import current_app, request, jsonify
from app.domain.Veiculo import Veiculo

def get():
    id_veiculo=int(request.args['id'])
    query=Veiculo.query.filter(id_veiculo==id).first()
    return jsonify(query)

def post():
    modelo=request.args['modelo']
    query=Veiculo(modele)
    db.session.add(query)
    db.session.commit()
    return jsonify(query)

def put():
    id_Veiculo=int(request.args['id'])
    query=db.session.query(Veiculo).filter(id_Veiculo==id).first()
    query.nome=nome
    return jsonify(query)

def delete():
    id_Veiculo=int(request.args['id'])
    query=Veiculo.query.filter(id_Veiculo==id).delete()
    return jsonify(query)
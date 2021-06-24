from sqlalchemy import inspect
from app import db

class Veiculo(db.Model):
    id_compra=db.Column('id_compra', db.Integer, primary_key=True, autoincrement=True)
    modelo=db.Column(db.String(150))
    marca=db.Column(db.String(150))
    ano_fabricacao=db.Column(db.Integer())
    placa=db.Column(db.String(150))
    cor=db.Column(db.String(150))
    chassi=db.Column(db.String(150))
    data_compra=db.Column(db.DateTime())
    valor_compra=db.Column(db.Integer())
    
    def to_dict(self):
        return {
            'id_compra': self.id_compra,
            'modelo': self.modelo,
            'marca': self.marca,
            'ano_fabricacao': self.ano_fabricacao,
            'placa': self.placa,
            'cor': self.cor,
            'chassi': self.chassi,
            'data_compra': self.data_compra,
            'valor_compra': self.valor_compra
        }
from sqlalchemy import inspect
from app import db

class Recibo(db.Model):
    id_recibo=db.Column('id_recibo', db.Integer, primary_key=True, autoincrement=True)
    data_venda=db.Column(db.Date())
    valor_venda=db.Column(db.Integer())
    comissao=db.Column(db.Integer())
    
    def to_dict(self):
        return {
            'id_recibo': self.id_recibo,
            'data_venda': self.data_venda,
            'valor_venda': self.valor_venda,
            'comissao': self.comissao
        }
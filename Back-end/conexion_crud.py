#!/usr/bin/env python
# coding: utf-8

# # Conexión a la base de datos
# 
# Base de datos de prod:
#     host='82.197.82.20',
#     user='u734300746_hackaton',
#     password='7uT?9b|AN6x',
#     database='u734300746_health_centro',
#     port=3306
# 
# Base de datos QA:
#     host='localhost',
#     user='root',
#     password='',
#     database='meta_hackaton',
#     port=3306

# In[13]:


import pymysql

def connect_to_mysql():
    try:
        connection = pymysql.connect(
            host='localhost',
            user='root',
            password='',
            database='meta_hackaton',
            port=3306
        )
        print("Conexión exitosa a MySQL/MariaDB")
        return connection
    except Exception as e:
        print(f"Error al conectar a MySQL: {e}")
        return None


# # Insert
# 
# Función genérica para realizar un INSERT en una tabla MySQL/MariaDB.
# 
#     Args:
#     - connection: La conexión a la base de datos.
#     - table: El nombre de la tabla.
#     - data: Un diccionario con los datos a insertar.
# 
#     Returns:
#     - insert_id: El ID del registro insertado.

# In[8]:


import pymysql

def insert_generic(connection, table, data):
    
    cursor = connection.cursor()
    
    columns = ', '.join(data.keys())
    placeholders = ', '.join(['%s'] * len(data))
    query = f"INSERT INTO {table} ({columns}) VALUES ({placeholders})"
    
    try:
        cursor.execute(query, tuple(data.values()))
        connection.commit()
        insert_id = cursor.lastrowid
        print(f"Registro insertado con ID: {insert_id}")
        return insert_id
    except Exception as e:
        connection.rollback()
        print(f"Error en INSERT: {e}")
        return None
    finally:
        cursor.close()


# ## Select
# 
# Función genérica para realizar un SELECT en una tabla MySQL/MariaDB.
# 
#     Args:
#     - connection: La conexión a la base de datos.
#     - table: El nombre de la tabla.
#     - conditions: Un diccionario opcional con las condiciones para el WHERE.
# 
#     Returns:
#     - results: Una lista de tuplas con los resultados de la consulta.

# In[9]:


def select_generic(connection, table, conditions=None):

    cursor = connection.cursor()
    
    query = f"SELECT * FROM {table}"
    
    if conditions:
        condition_str = ' AND '.join([f"{key} = %s" for key in conditions.keys()])
        query += f" WHERE {condition_str}"
        values = tuple(conditions.values())
    else:
        values = ()
    
    try:
        cursor.execute(query, values)
        results = cursor.fetchall()
        return results
    except Exception as e:
        print(f"Error en SELECT: {e}")
        return None
    finally:
        cursor.close()


# ## Update
# 
# Función genérica para realizar un UPDATE en una tabla MySQL/MariaDB.
# 
#     Args:
#     - connection: La conexión a la base de datos.
#     - table: El nombre de la tabla.
#     - data: Un diccionario con los datos a actualizar.
#     - conditions: Un diccionario con las condiciones para el WHERE.
# 
#     Returns:
#     - affected_rows: El número de filas afectadas.

# In[10]:


def update_generic(connection, table, data, conditions):

    cursor = connection.cursor()
    
    set_clause = ', '.join([f"{key} = %s" for key in data.keys()])
    condition_clause = ' AND '.join([f"{key} = %s" for key in conditions.keys()])
    
    query = f"UPDATE {table} SET {set_clause} WHERE {condition_clause}"
    
    values = tuple(data.values()) + tuple(conditions.values())
    
    try:
        cursor.execute(query, values)
        connection.commit()
        affected_rows = cursor.rowcount
        print(f"Filas actualizadas: {affected_rows}")
        return affected_rows
    except Exception as e:
        connection.rollback()
        print(f"Error en UPDATE: {e}")
        return None
    finally:
        cursor.close()


# ## Delete
# 
#     Función genérica para realizar un DELETE en una tabla MySQL/MariaDB.
# 
#     Args:
#     - connection: La conexión a la base de datos.
#     - table: El nombre de la tabla.
#     - conditions: Un diccionario con las condiciones para el WHERE.
# 
#     Returns:
#     - affected_rows: El número de filas eliminadas.

# In[11]:


def delete_generic(connection, table, conditions):
    
    cursor = connection.cursor()
    
    condition_clause = ' AND '.join([f"{key} = %s" for key in conditions.keys()])
    query = f"DELETE FROM {table} WHERE {condition_clause}"
    
    values = tuple(conditions.values())
    
    try:
        cursor.execute(query, values)
        connection.commit()
        affected_rows = cursor.rowcount
        print(f"Filas eliminadas: {affected_rows}")
        return affected_rows
    except Exception as e:
        connection.rollback()
        print(f"Error en DELETE: {e}")
        return None
    finally:
        cursor.close()


# # Pruebas

# In[14]:


# Conectar a la base de datos
connection = connect_to_mysql()

# Datos a insertar
data = {
    'nombre': 'Maria',
    'apellido_paterno': 'Lopez',
    'apellido_materno': 'Castodo',
    'fecha_nacimiento': '2000-10-21',
    'correo': 'maria.lopez@example.com',
    'direccion': 'Calle 3, Col. Obrera, Benito Juárez, CDMX, México',
    'telefono': '556677889900',
    'alergias': 'pasto',
    'fumador': 'TRUE',
    'se_droga': 'Cocaina',
    'alcohol': 'TRUE'
}
insert_generic(connection, 'Paciente', data)

# Asegúrate de cerrar la conexión cuando termines
if connection:
    connection.close()
    print("Conexión cerrada")


# In[ ]:





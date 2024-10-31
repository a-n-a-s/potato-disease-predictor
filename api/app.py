import tensorflow as tf

new_model = tf.keras.models.load_model('model.h5', 
                                       custom_objects=None)
print(new_model.predict)
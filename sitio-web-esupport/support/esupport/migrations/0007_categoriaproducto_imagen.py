# Generated by Django 4.2.3 on 2023-07-25 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('esupport', '0006_alter_producto_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='categoriaproducto',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='productos/'),
        ),
    ]

# Generated by Django 4.2.3 on 2023-07-25 22:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('esupport', '0005_categoriaproducto_producto_categoria'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='categoria',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='esupport.categoriaproducto'),
        ),
    ]
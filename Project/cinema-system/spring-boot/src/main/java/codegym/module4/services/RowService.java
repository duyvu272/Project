package codegym.module4.services;

import codegym.module4.entities.Row;
import codegym.module4.entities.ShowRoom;

import java.util.List;

public interface RowService
{
    List<Row> findAll();
    List<Row> findByShowRoom(ShowRoom showRoom);
}

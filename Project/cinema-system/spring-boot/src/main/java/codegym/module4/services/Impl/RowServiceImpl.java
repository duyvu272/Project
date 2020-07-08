package codegym.module4.services.Impl;

import codegym.module4.entities.Row;
import codegym.module4.entities.ShowRoom;
import codegym.module4.repositories.RowRepo;
import codegym.module4.services.RowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RowServiceImpl implements RowService
{
    @Autowired
    private RowRepo rowRepo;
    @Override
    public List<Row> findAll()
    {
        return rowRepo.findAll();
    }

    @Override
    public List<Row> findByShowRoom(ShowRoom showRoom)
    {
        return rowRepo.findByShowRoom(showRoom);
    }
}

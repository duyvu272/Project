package codegym.module4.controllers;

import codegym.module4.entities.Movie;
import codegym.module4.entities.Promotion;
import codegym.module4.services.MovieService;
import codegym.module4.services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "**")
@RestController
public class PromotionController {
    @Autowired
    private PromotionService promotionService;

    @GetMapping(value = "/promotions")
    public ResponseEntity<List<Promotion>> findAll() {
        List<Promotion> promotions = promotionService.findAll();
        if (promotions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(promotions, HttpStatus.OK);
    }

    @GetMapping(value = "/promotions/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Promotion> getMovieById(
            @PathVariable("id") Integer promotion_id) {
        Optional<Promotion> promotion = promotionService.findById(promotion_id);

        if (!promotion.isPresent()) {
            return new ResponseEntity<>(promotion.get(),
                    HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(promotion.get(), HttpStatus.OK) ;

    }

    @PostMapping(value = "/promotions")
    public ResponseEntity<Void> createPromotion(
            @RequestBody Promotion promotion,
            UriComponentsBuilder builder) {
        promotionService.save(promotion);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/promotions/{id}")
                .buildAndExpand(promotion.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @PutMapping(value = "/promotions/{id}")
    public ResponseEntity<Promotion> updatePromotion(
            @PathVariable("id") Integer id,
            @RequestBody Promotion promotion) {
        Optional<Promotion> currentPromotions = promotionService
                .findById(id);

        if (!currentPromotions.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        currentPromotions.get().setPromotionBeginDate(promotion.getPromotionBeginDate());
        currentPromotions.get().setPromotionEndDate(promotion.getPromotionEndDate());
        currentPromotions.get().setPromotionDiscount(promotion.getPromotionDiscount());
        currentPromotions.get().setPromotionDescription(promotion.getPromotionDescription());
        currentPromotions.get().setPromotionTitle(promotion.getPromotionTitle());
        currentPromotions.get().setPromotionImage(promotion.getPromotionImage());

        promotionService.save(currentPromotions.get());
        return new ResponseEntity<>(currentPromotions.get(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/promotions/{id}")
    public ResponseEntity<Promotion> deletePromotion(
            @PathVariable("id") Integer id) {
        Optional<Promotion> promotion = promotionService.findById(id);
        if (!promotion.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        promotionService.remove(promotion.get());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
